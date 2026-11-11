import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TawkService {
  constructor() {
    this.loadTawk();
  }

  private loadTawk(): void {
    const tawkScript = document.createElement('script');
    tawkScript.type = 'text/javascript';
    tawkScript.async = true;
    tawkScript.src = 'https://embed.tawk.to/670535a902d78d1a30ee23ad/1i9m5j9bl';
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    document.body.appendChild(tawkScript);
  }
}
