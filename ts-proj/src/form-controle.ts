const SHOW_ERROR_MESSAGES = 'show-error-message';
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLFormElement;
const email = document.querySelector('.email') as HTMLFormElement;
const password = document.querySelector('.password') as HTMLFormElement;
const password2 = document.querySelector('.password2') as HTMLFormElement;

form.addEventListener('submit', function(event: Event) {
  event.preventDefault();
  hideErroMessages(this);
});

function hideErroMessages(form: HTMLFormElement): void {
  //20:52
}