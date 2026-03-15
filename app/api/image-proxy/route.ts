import { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new Response('Missing "url" query parameter.', { status: 400 });
  }

  try {
    const upstreamResponse = await fetch(targetUrl);

    if (!upstreamResponse.ok) {
      return new Response('Failed to fetch upstream image.', {
        status: upstreamResponse.status
      });
    }

    const contentType = upstreamResponse.headers.get('content-type') ?? 'image/jpeg';
    const arrayBuffer = await upstreamResponse.arrayBuffer();

    return new Response(Buffer.from(arrayBuffer), {
      status: 200,
      headers: {
        'Content-Type': contentType,
        // Allow the browser to use this response as an image source
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return new Response('Error proxying image.', { status: 500 });
  }
}
