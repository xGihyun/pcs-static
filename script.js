function toggleAnimation() {
  const loader = document.querySelector(".loader-container");

  if (!loader) return;

  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    sessionStorage.setItem("animation_played", "false");
    console.info("This page is reloaded");
  }

  if (sessionStorage.getItem("animation_played") === "true") {
    console.log("No keys yet");
    loader.classList.add("hidden");
    return;
  }

  setTimeout(() => {
    loader.classList.add("hidden");
    sessionStorage.setItem("animation_played", "true");
    console.log("Added key");
  }, 2500);
}

toggleAnimation();
