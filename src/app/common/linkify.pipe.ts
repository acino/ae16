import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'linkify', pure: true})
export class LinkifyPipe implements PipeTransform {
  private pattern : RegExp = /((?:http|https|ssh|ftp):\/\/(?:[\w\./-]+))/gi;
  transform(value: string, []) : string {
    return value.replace(this.pattern, function(match, $1) {
      return '<a href="' + $1 + '">' + $1 + '</a>';
    });
  }
}
