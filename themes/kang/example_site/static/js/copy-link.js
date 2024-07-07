function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied link!: " + text);
      })
      .catch(err => {
        console.error('Failed to copy link: ', err);
      });
  }