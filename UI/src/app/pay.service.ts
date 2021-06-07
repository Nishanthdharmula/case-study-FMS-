import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class PayService {

  get nativeWindow() : any{
    return _window();
  }

  constructor(private httpService: HttpClient) { }

}
