import { NextResponse } from 'next/server';
import { cities } from '@/lib/data/cities';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  
  if (slug) {
    const city = cities.find(city => city.slug === slug);
    if (!city) {
      return NextResponse.json(null, { status: 404 });
    }
    return NextResponse.json(city);
  }
  // No slug: return all cities
  return NextResponse.json(cities);
}
