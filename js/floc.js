(async () => {
  const { flocId, flocVersion } = await document.interestCohort();
  console.log('FLoC ID:', flocId);
  console.log('FLoC version:', flocVersion);
})();
