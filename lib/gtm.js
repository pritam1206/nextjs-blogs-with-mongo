export const GTM_ID = 'GTM-WVLBRQ4'; // process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
console.log(GTM_ID);

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
