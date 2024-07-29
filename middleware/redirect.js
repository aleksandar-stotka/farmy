export default defineNuxtRouteMiddleware((to, from) => {
  const { $setBackNavigationDisabled } = useNuxtApp();

  if ($setBackNavigationDisabled) {
    window.history.replaceState(null, '', window.location.href);
    $setBackNavigationDisabled = false;
  }

  // Disable back navigation when navigating to the dashboard or after deleting a document
  if (to.path === '/dashboard' || from.path.startsWith('/detailsList/')) {
    $setBackNavigationDisabled = true;
  }
});
