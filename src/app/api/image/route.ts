import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
    <html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
    <xsl:for-each select="breakfast_menu/food">
      <div style="background-color:teal;color:white;padding:4px">
        <span style="font-weight:bold"><xsl:value-of select="name"/> - </span>
        <xsl:value-of select="price"/>
        </div>
      <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
        <p>
        <xsl:value-of select="description"/>
        <span style="font-style:italic"> (<xsl:value-of select="calories"/> calories per serving)</span>
        </p>
      </div>
    </xsl:for-each>
    </body>
    </html>`;

    return new NextResponse(xmlContent, {
      headers: { 'Content-Type': 'text/xml' },
    });
    /* return NextResponse.json([
      {
        Plan: 'Stage 1',
        Start: '6/25/2013',
        End: '7/10/2013',
        Status: '30%',
      },
      { Plan: 'Stage 2', Start: '7/13/2013', End: '11/28/2013', Status: '40%' },
      { Plan: 'Stage 3', Start: '12/1/2013', End: '12/25/2013', Status: '20%' },
    ]); */
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
