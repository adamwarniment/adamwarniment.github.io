(async () => {
  const { window.flocId, window.flocVersion } = await document.interestCohort();
  console.log('FLoC ID:', flocId);
  console.log('FLoC version:', flocVersion);
})();
