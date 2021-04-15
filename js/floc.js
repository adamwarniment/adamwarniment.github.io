(async () => {
  const { window.flocId, window.flocVersion } = await document.interestCohort();
  console.log('FLoC ID:', window.flocId);
  console.log('FLoC version:', window.flocVersion);
})();
