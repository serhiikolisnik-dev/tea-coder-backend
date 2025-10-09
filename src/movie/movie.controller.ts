import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Headers,
  Req,
  Res,
  Param,
  Session,
} from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('movies')
export class MovieController {
  private movies = [
    {
      title: 'Sport',
    },
    {
      title: 'Movies',
    },
  ];

  @Get()
  getMovies(@Query() query: any) {
    return JSON.stringify(query);
  }

  @Get('by-id/:id')
  getMovieBuID(@Param('id') id: string) {
    return { id };
  }

  @Post()
  getBody(@Body() body: { title: string; desc: string }) {
    return body;
  }

  @Get('headers')
  getHeaders(@Headers() headers: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return headers;
  }

  @Get('user-agent')
  getUserAgent(@Headers('user-agent') userAgent: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { userAgent };
  }

  @Get('request')
  getRequestDetails(@Req() req: Request) {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers,
      query: req.query,
      params: req.params,
    };
  }

  @Get('response')
  getResponseDetails(@Res() res: Response) {
    res
      .status(201)
      .json({ message: 'Successfully retrieved response details' });
  }

  @Get('session')
  getSessionDetails(@Session() session: Record<string, any>) {
    return session;
  }
}
