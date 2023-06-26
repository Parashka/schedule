import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class YoutubeService {
  private readonly telegramBotToken: string;

  constructor() {
    this.telegramBotToken = '6110090069:AAF0hgROlK27vEdiUey3-Z2OihRgwTn8mi8';
  }

  async getVideoDetails(videoId: string) {
    const apiKey = 'AIzaSyAJOMuGFtAPyCB8jCuYCxNNSjvJdi3pBPI';
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;
    
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Не вдалося отримати данні про відео з YT каналу.');
    }
  }

  async sendTelegramMessage(chatId: string, message: string) {
    const url = `https://api.telegram.org/bot${this.telegramBotToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message,
    };

    try {
      await axios.post(url, data);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to send Telegram message');
    }
  }
}