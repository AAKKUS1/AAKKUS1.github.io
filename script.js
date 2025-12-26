document.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    e.preventDefault();
    const url = e.target.href;
    
    document.startViewTransition(() => {
      window.location.href = url;
    });
  }
});