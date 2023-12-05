import { NextResponse } from 'next/server';
export async function GET(req: Request) {
  try {
    const xmlContent = `<html>
    <style>
    div {
      background-color: #FFF4A3;
    }
    </style>
    <body>
    
    <h1>HTML DIV Example</h1>
    
    <div>
      <h2>London</h2>
      <p>London is the capital city of England.</p>
      <p>London has over 13 million inhabitants.</p>
    </div>
    
    <p>The yellow background is added to demonstrate the footprint of the DIV element.</p>
    
    </body>
    </html>`;

    /*  return new NextResponse(htmlData, {
      headers: { 'Content-Type': 'text/html' },
    }); */
    return NextResponse.json([
      {
        Plan: 'Stage 1',
        Start: '6/25/2013',
        End: '7/10/2013',
        Status: '30%',
      },
      { Plan: 'Stage 2', Start: '7/13/2013', End: '11/28/2013', Status: '40%' },
      { Plan: 'Stage 3', Start: '12/1/2013', End: '12/25/2013', Status: '20%' },
    ]);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
