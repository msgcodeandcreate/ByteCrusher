import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatStartComponent } from './chat-start.component';

describe('ChatStartComponent', () => {
  let component: ChatStartComponent;
  let fixture: ComponentFixture<ChatStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
