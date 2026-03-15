'use client';

import { Button } from 'components/button';
import jsPDF from 'jspdf';
import { useState } from 'react';
import { flowerImages, pollinatorImages } from './data/pollinators';

// Using your existing Pollinator interface
interface Pollinator {
  title: string;
  subtitle: string;
  identification: string[];
  flowers: string[];
  ecological: string[];
  habitat: string[];
  color: string;
  photoCredit?: string;
  flowerPhotoCredit?: string;
}

interface DownloadButtonsProps {
  pollinator: Pollinator;
  cardId?: string; // Make it optional to maintain backward compatibility
}

export default function PdfDownloadButtons({ pollinator }: DownloadButtonsProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  // Helper function to convert hex color to RGB
  const hexToRgb = (hexColor: string) => {
    // Default to a neutral gray if null or undefined
    if (!hexColor) {
      return { r: 100, g: 100, b: 100 };
    }

    try {
      // Remove # if present
      const hex = hexColor.replace('#', '');

      // Handle shorthand hex notation (e.g. #F90)
      if (hex && hex.length === 3) {
        // Safely access characters with null checks
        const r = hex.charAt(0) + hex.charAt(0);
        const g = hex.charAt(1) + hex.charAt(1);
        const b = hex.charAt(2) + hex.charAt(2);
        return {
          r: parseInt(r, 16) || 0,
          g: parseInt(g, 16) || 0,
          b: parseInt(b, 16) || 0
        };
      }

      // Standard hex color
      if (hex && hex.length >= 6) {
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return {
          r: isNaN(r) ? 100 : r,
          g: isNaN(g) ? 100 : g,
          b: isNaN(b) ? 100 : b
        };
      }
    } catch (e) {
      console.error('Error parsing hex color:', e);
    }

    // Default to a neutral gray if parsing fails
    return { r: 100, g: 100, b: 100 };
  };

  // Helper function to convert an image URL to base64, using a same-origin proxy
  const getBase64FromUrl = async (url: string): Promise<string | null> => {
    try {
      // Always go through our own Next.js proxy route so the browser
      // sees this as a same-origin request and avoids CORS/canvas issues.
      const proxyUrl = `/api/image-proxy?url=${encodeURIComponent(url)}`;

      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch image via proxy: ${response.status}`);
      }

      // Create a blob from the response
      const blob = await response.blob();

      // Create a FileReader to convert the blob to base64
      return new Promise<string | null>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          resolve(base64String);
        };
        reader.onerror = () => {
          console.error('Error converting image to base64');
          resolve(null);
        };
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  };

  // Function to download PDF
  const downloadSingleCard = async () => {
    // Don't attempt to generate if already generating
    if (isGenerating) return;

    try {
      setIsGenerating(true);
      console.log('Starting PDF generation...');

      // Create a new PDF document
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'letter'
      });

      // Convert hex color to RGB
      const rgb = hexToRgb(pollinator.color);

      // Create a very light background color based on the theme color
      const lightBg = {
        r: Math.min(255, rgb.r + 220),
        g: Math.min(255, rgb.g + 220),
        b: Math.min(255, rgb.b + 220)
      };

      // Define header dimensions and positions
      const headerX = 0.5;
      const headerY = 0.5;
      const headerWidth = 7.5;
      const headerHeight = 1.2;
      const headerCenterY = headerY + headerHeight / 2;

      console.log('Adding colored header...');
      // 1. Add colored header
      pdf.setFillColor(rgb.r, rgb.g, rgb.b);
      pdf.rect(headerX, headerY, headerWidth, headerHeight, 'F');

      // 2. Add title
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(28);
      pdf.text(pollinator.title, 4.25, headerCenterY - 0.2, { align: 'center' });

      // 3. Add scientific name
      pdf.setFontSize(16);
      pdf.text(pollinator.subtitle, 4.25, headerCenterY + 0.2, { align: 'center' });

      // 4. Add logo to the left side of the header, centered vertically
      console.log('Attempting to add logo...');
      try {
        // Define logo dimensions and position
        const logoWidth = 0.8;
        const logoHeight = 0.8;
        const logoX = headerX + 0.2;
        const logoY = headerCenterY - logoHeight / 2; // Center vertically in header

        // Use the external logo image URL directly
        const logoUrl = 'https://i.postimg.cc/W1FybQdQ/SSP-Farm-Logo-dark.png';

        // Get logo as base64
        const logoBase64 = await getBase64FromUrl(logoUrl);

        if (logoBase64) {
          // Add to PDF - position at left side of header, centered vertically
          pdf.addImage(logoBase64, 'PNG', logoX, logoY, logoWidth, logoHeight, 'logo', 'FAST');
          console.log('Logo added successfully');
        } else {
          console.error('Failed to load logo image');
          // Create a placeholder rectangle as fallback
          pdf.setFillColor(255, 255, 255);
          pdf.rect(logoX, logoY, logoWidth, logoHeight, 'F');
        }
      } catch (logoError) {
        console.error('Failed to add logo:', logoError);
      }

      // 5. Add QR code to the right side of the header, centered vertically
      console.log('Attempting to add QR code...');
      try {
        // Define QR code dimensions and position
        const qrWidth = 0.8;
        const qrHeight = 0.8;
        const qrX = headerX + headerWidth - qrWidth - 0.2;
        const qrY = headerCenterY - qrHeight / 2; // Center vertically in header

        // Generate QR code URL with cache buster - pointing to main pollinators page
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://www.sugarsnappeafarm.com/pollinators')}&t=${Date.now()}`;

        // Get QR code as base64 (bypassing CORS)
        const qrBase64 = await getBase64FromUrl(qrCodeUrl);

        if (!qrBase64) {
          console.warn("Couldn't load QR code from URL, trying alternate approach");

          // Create a simple QR code SVG as a fallback
          const svgQR = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="white"/>
            <g fill="black">
              <rect x="10" y="10" width="10" height="10"/>
              <rect x="20" y="10" width="10" height="10"/>
              <rect x="30" y="10" width="10" height="10"/>
              <rect x="10" y="20" width="10" height="10"/>
              <rect x="30" y="20" width="10" height="10"/>
              <rect x="10" y="30" width="10" height="10"/>
              <rect x="20" y="30" width="10" height="10"/>
              <rect x="30" y="30" width="10" height="10"/>
              <!-- Simplified QR pattern -->
              <rect x="60" y="10" width="10" height="10"/>
              <rect x="70" y="10" width="10" height="10"/>
              <rect x="80" y="10" width="10" height="10"/>
              <rect x="60" y="20" width="10" height="10"/>
              <rect x="80" y="20" width="10" height="10"/>
              <rect x="60" y="30" width="10" height="10"/>
              <rect x="70" y="30" width="10" height="10"/>
              <rect x="80" y="30" width="10" height="10"/>
            </g>
          </svg>`;

          // Convert SVG to data URL
          const qrDataUrl =
            'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgQR)));

          // Add to PDF
          pdf.addImage(qrDataUrl, 'SVG', qrX, qrY, qrWidth, qrHeight, 'qrcode', 'FAST');

          // No text needed for QR code
        } else {
          console.log('QR code loaded successfully, adding to PDF');
          // Add QR code to the PDF
          pdf.addImage(qrBase64, 'PNG', qrX, qrY, qrWidth, qrHeight, 'qrcode', 'FAST');

          // No text needed for QR code - everyone knows what it is
        }
      } catch (qrError) {
        console.error('Failed to add QR code:', qrError);
      }

      // Starting position for content after header
      let startY = headerY + headerHeight + 0.2;

      // 6. Try to add pollinator and flower images
      console.log('Attempting to add pollinator and flower images...');
      try {
        // Get pollinator image URL
        const pollinatorUrl =
          pollinator.title && pollinatorImages[pollinator.title]
            ? pollinatorImages[pollinator.title]
            : null;

        // Get flower image URL
        const flowerUrl =
          pollinator.flowers &&
          pollinator.flowers.length > 0 &&
          pollinator.flowers[0] &&
          flowerImages[pollinator.flowers[0]]
            ? flowerImages[pollinator.flowers[0]]
            : null;

        // Add pollinator image if available
        if (pollinatorUrl) {
          console.log('Getting pollinator image from:', pollinatorUrl);
          const imgWidth = 3.5;
          const imgHeight = 2.5;

          // Get pollinator image as base64
          const pollinatorBase64 = await getBase64FromUrl(pollinatorUrl);

          // Add colored border
          pdf.setDrawColor(rgb.r, rgb.g, rgb.b);
          pdf.setLineWidth(0.05);
          pdf.rect(0.5, startY, imgWidth, imgHeight, 'D');

          // Add the image if we got a base64 string
          if (pollinatorBase64) {
            console.log('Pollinator image loaded successfully, adding to PDF');
            try {
              pdf.addImage(
                pollinatorBase64,
                'JPEG',
                0.5 + 0.05,
                startY + 0.05,
                imgWidth - 0.1,
                imgHeight - 0.1,
                'pollinator',
                'FAST'
              );
            } catch (imgError) {
              console.warn('Failed to add pollinator image:', imgError);
            }
          } else {
            console.warn("Couldn't get base64 for pollinator image");
          }

          // Add label below image
          pdf.setFillColor(rgb.r, rgb.g, rgb.b);
          pdf.rect(0.5, startY + imgHeight, imgWidth, 0.3, 'F');

          pdf.setTextColor(255, 255, 255);
          pdf.setFontSize(12);
          pdf.text(pollinator.title, 0.5 + imgWidth / 2, startY + imgHeight + 0.2, {
            align: 'center'
          });

          // Add pollinator photo credit if available
          if (pollinator.photoCredit) {
            pdf.setTextColor(100, 100, 100);
            pdf.setFontSize(8);
            pdf.text(pollinator.photoCredit, 0.5 + imgWidth / 2, startY + imgHeight + 0.45, {
              align: 'center'
            });
          }
        }

        // Add flower image if available
        if (flowerUrl && pollinator.flowers && pollinator.flowers.length > 0) {
          console.log('Getting flower image from:', flowerUrl);
          const firstFlower = pollinator.flowers[0] || '';
          const flowerWidth = 3.5;
          const flowerHeight = 2.5;
          const flowerX = 4.5;

          // Get flower image as base64
          const flowerBase64 = await getBase64FromUrl(flowerUrl);

          // Add colored border
          pdf.setDrawColor(rgb.r, rgb.g, rgb.b);
          pdf.setLineWidth(0.05);
          pdf.rect(flowerX, startY, flowerWidth, flowerHeight, 'D');

          // Add the image if we got a base64 string
          if (flowerBase64) {
            console.log('Flower image loaded successfully, adding to PDF');
            try {
              pdf.addImage(
                flowerBase64,
                'JPEG',
                flowerX + 0.05,
                startY + 0.05,
                flowerWidth - 0.1,
                flowerHeight - 0.1,
                'flower',
                'FAST'
              );
            } catch (imgError) {
              console.warn('Failed to add flower image:', imgError);
            }
          } else {
            console.warn("Couldn't get base64 for flower image");
          }

          // Add label below image
          pdf.setFillColor(rgb.r, rgb.g, rgb.b);
          pdf.rect(flowerX, startY + flowerHeight, flowerWidth, 0.3, 'F');

          pdf.setTextColor(255, 255, 255);
          pdf.setFontSize(12);
          pdf.text(firstFlower, flowerX + flowerWidth / 2, startY + flowerHeight + 0.2, {
            align: 'center'
          });

          // Add flower photo credit if available
          if (pollinator.flowerPhotoCredit) {
            pdf.setTextColor(100, 100, 100);
            pdf.setFontSize(8);
            pdf.text(
              pollinator.flowerPhotoCredit,
              flowerX + flowerWidth / 2,
              startY + flowerHeight + 0.45,
              {
                align: 'center'
              }
            );
          }
        }

        // Update Y position for next section
        startY += 3.0;
      } catch (imageError) {
        console.error('Error adding images:', imageError);
        // Proceed without images
        startY += 0.5;
      }

      // 7. Add Identification section
      console.log('Adding content sections...');
      pdf.setTextColor(0, 0, 0);
      pdf.setFillColor(lightBg.r, lightBg.g, lightBg.b); // Very light color
      pdf.rect(0.5, startY, 7.5, 1.8, 'F');

      // Section header with accent bar
      pdf.setFillColor(rgb.r, rgb.g, rgb.b);
      pdf.rect(0.5, startY, 0.2, 1.8, 'F');

      pdf.setFontSize(18);
      pdf.setTextColor(rgb.r, rgb.g, rgb.b);
      pdf.text('Identification', 0.9, startY + 0.4);

      // Add identification points
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(13);
      let yPos = startY + 0.7;
      pollinator.identification.forEach((point) => {
        // Create colored bullet
        pdf.setFillColor(rgb.r, rgb.g, rgb.b);
        pdf.circle(0.85, yPos - 0.05, 0.06, 'F');

        pdf.text(point, 1.1, yPos, { maxWidth: 6.8 });
        yPos += 0.3;
      });

      // 8. Add Flowers Pollinated section
      startY += 2.0;
      pdf.setFillColor(lightBg.r, lightBg.g, lightBg.b); // Very light color
      pdf.rect(0.5, startY, 7.5, 1.2, 'F');

      // Section header with accent bar
      pdf.setFillColor(rgb.r, rgb.g, rgb.b);
      pdf.rect(0.5, startY, 0.2, 1.2, 'F');

      pdf.setFontSize(18);
      pdf.setTextColor(rgb.r, rgb.g, rgb.b);
      pdf.text('Flowers Pollinated', 0.9, startY + 0.4);

      // Add flowers list
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(13);

      // Format flowers as a flowing list with commas
      const flowerText = pollinator.flowers.join(', ');
      pdf.text(flowerText, 1.1, startY + 0.8, { maxWidth: 6.8 });

      // 9. Add Ecological Importance section (left column)
      startY += 1.4;
      pdf.setFillColor(lightBg.r, lightBg.g, lightBg.b); // Very light color
      pdf.rect(0.5, startY, 3.6, 2.2, 'F');

      // Section header with accent bar
      pdf.setFillColor(rgb.r, rgb.g, rgb.b);
      pdf.rect(0.5, startY, 0.2, 2.2, 'F');

      pdf.setFontSize(18);
      pdf.setTextColor(rgb.r, rgb.g, rgb.b);
      pdf.text('Ecological Importance', 0.9, startY + 0.4);

      // Add ecological points with numbered bullets
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(13);
      let ecoYPos = startY + 0.7;
      pollinator.ecological.forEach((point, idx) => {
        // Numbered point with pollinator color
        pdf.setTextColor(rgb.r, rgb.g, rgb.b);
        pdf.text(`${idx + 1}.`, 0.8, ecoYPos);

        pdf.setTextColor(0, 0, 0);
        pdf.text(point, 1.1, ecoYPos, { maxWidth: 2.9 });
        ecoYPos += 0.5;
      });

      // 10. Add Habitat section (right column)
      pdf.setFillColor(lightBg.r, lightBg.g, lightBg.b); // Very light color
      pdf.rect(4.4, startY, 3.6, 2.2, 'F');

      // Section header with accent bar
      pdf.setFillColor(rgb.r, rgb.g, rgb.b);
      pdf.rect(4.4, startY, 0.2, 2.2, 'F');

      pdf.setFontSize(18);
      pdf.setTextColor(rgb.r, rgb.g, rgb.b);
      pdf.text('Habitat', 4.8, startY + 0.4);

      // Add habitat points with bullets
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(13);
      let habYPos = startY + 0.7;
      pollinator.habitat.forEach((point) => {
        // Bullet with pollinator color
        pdf.setFillColor(rgb.r, rgb.g, rgb.b);
        pdf.circle(4.7, habYPos - 0.05, 0.06, 'F');

        pdf.text(point, 5.0, habYPos, { maxWidth: 2.9 });
        habYPos += 0.5;
      });

      // 11. Add footer text (no divider line)
      pdf.setFontSize(11);
      pdf.setTextColor(80, 80, 80);
      pdf.text('www.sugarsnappeafarm.com', 4.25, 10.7, { align: 'center' });

      // 12. Save the PDF
      console.log('Saving PDF...');
      pdf.save(`${pollinator.title.replace(/\s+/g, '_')}_card.pdf`);
      console.log('PDF saved successfully!');
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('There was an error generating the PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="mt-4 print:hidden">
      <Button
        onClick={downloadSingleCard}
        disabled={isGenerating}
        className={`rounded-full ${isGenerating ? 'bg-gray-400' : 'bg-main-red-barn'} w-full px-[1.87rem] py-[0.63rem] text-sm leading-none text-white`}
      >
        {isGenerating ? 'Generating PDF...' : 'Download Card PDF'}
      </Button>
    </div>
  );
}
