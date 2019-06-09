import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  private searchValue: Subject<string> = new Subject();
  @Output('onSearch') onSearchEvent: EventEmitter<string> = new EventEmitter();


  @Input() placeholder: string;
  @Input() value: string;
  @Input() disable: boolean;

  constructor() { }

  ngOnInit() {

    this.searchValue.asObservable().pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter(value => value.length > 2)
    ).subscribe(value => this.onSearchEvent.emit(value));

  }

  onKeyUp($event) {
    this.searchValue.next($event.target.value);
  }
}
