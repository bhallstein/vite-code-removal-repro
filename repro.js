import post_routing from "./post-routing";

function getSite() {
  return {site_id: 12}
}

const site = getSite()
const args = ['chickens', site, []]
const result = post_routing(...args)
console.log('//result/', result)
