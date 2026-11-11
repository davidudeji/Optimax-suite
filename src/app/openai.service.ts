import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAIService {
  private apiUrl =
    'https://api.openai.com/v1/engines/davinci-codex/completions'; // Update with the correct endpoint
  private apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key

  constructor(private http: HttpClient) {}

  generateResponse(userMessage: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      prompt: userMessage,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
