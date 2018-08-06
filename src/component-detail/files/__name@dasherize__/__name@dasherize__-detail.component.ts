import { Component, OnInit, Input } from '@angular/core';
import {  <%= classify(name) %> } from './<%= dasherize(name) %>';
 @Component({
  selector: 'civi-<%= dasherize(name) %>-detail',
  templateUrl: './<%= dasherize(name) %>-detail.component.html'
})
 export class <%= classify(name) %>DetailComponent implements OnInit {
  @Input() <%= camelize(name) %> : <%= classify(name) %>;
  ngOnInit() {
  }
}
