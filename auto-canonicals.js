/*
 * Drop this into a <script></script> high up on your pages sitewide to automatically
 * generate consistent canonical tags. 
 * Change VERSION to your preferred version of pages.
 */

var VERSION='https://www',w=window,d=w.document,h=w.location.hostname,c=d.createElement('link');c.rel='canonical',c.href=VERSION+'.'+h.substring(h.lastIndexOf('.',h.lastIndexOf('.')-1)+1)+('/'!==w.location.pathname?w.location.pathname:'');while(d.querySelector("link[rel='canonical']")){d.querySelector("link[rel='canonical']").remove()};d.getElementsByTagName('head').item(0).appendChild(c);
