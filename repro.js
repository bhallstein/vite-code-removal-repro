import post_routing from "./post-routing";

function getSite() {
  return {site_id: 12}
}

const site = getSite()
const result = post_routing('chickens', site, [])
console.log('//result/', result)
