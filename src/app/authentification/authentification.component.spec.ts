import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthentificationComponent } from './authentification.component';

describe('AuthentificationComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AuthentificationComponent]
  }));

  it('should create the authentification', () => {
    const fixture = TestBed.createComponent(AuthentificationComponent);
    const authentification = fixture.componentInstance;
    expect(authentification).toBeTruthy();
  });

  it(`should have as title 'cinetrek'`, () => {
    const fixture = TestBed.createComponent(AuthentificationComponent);
    const authentification = fixture.componentInstance;
    expect(authentification.title).toEqual('cinetrek');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AuthentificationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('cinetrek authentification is running!');
  });
});
