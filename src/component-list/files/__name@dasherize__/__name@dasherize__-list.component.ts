import { Component, OnInit, Input } from '@angular/core';
import {  <%= classify(name) %> } from './<%= dasherize(name) %>';
 @Component({
  selector: 'civi-<%= dasherize(name) %>-list',
  templateUrl: './<%= dasherize(name) %>-list.component.html'
})
export class <%= classify(name) %>ListComponent implements OnInit {
  @Input() <%= camelize(name) %>s : <%= classify(name) %>[];
  ngOnInit() {
  }
}
