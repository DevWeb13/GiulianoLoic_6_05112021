export default class Logo {
  constructor(domTarget) {
    domTarget.innerHTML += `<button class="logo" title="logo" onclick="document.location.href='index.html'">
        <img src=" ./img/logo/logo.svg" alt="logo">
    </button>`;
  }
}
