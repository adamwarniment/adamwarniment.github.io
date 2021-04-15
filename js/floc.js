(async () => {
  const { flocId, flocVersion } = await document.interestCohort();
  window.flocId = flocId;
  window.flocVersion = flocVersion;
  console.log('FLoC ID:', flocId);
  console.log('FLoC version:', flocVersion);
})();
