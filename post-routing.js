

function array_eq(arr1, arr2) {
  return (
    arr1 &&
    arr2 &&
    arr1.length === arr2.length &&
    arr1.reduce((carry, val, i) => (carry && arr2[i] === val), true)
  )
}

const RoutePage404 = 'RP404'
const RouteSite404 = 'RS404'


function get_path_components(pathname) {
  const path_components = pathname.split('/').map(decodeURIComponent)
  return array_eq(path_components, [''])
    ? ['pages', 'homepage']
    : path_components
}

export function post_type_for_route(route, post_types = []) {
  return post_types.find(pt => pt.url === route.post_type_url)
}

export default function post_routing(path, site, post_types) {
  if (!site) {
    console.log('//temp/')
    return RouteSite404
  }

  path = path.replace(/^\//, '')
  const path_components = get_path_components(path)
  const post_type_url = path_components[0]
  const post_url = path_components[1]
  const post_type = (post_types || []).find(item => item.url === post_type_url)

  // For domain.com/<x>, x may be page or post-archive
  if (path_components.length === 1) {
    if (post_type) {
      return {
        post_type_url,
        post_url: '__archive',
      }
    }
    else {
      return {
        post_type_url: 'pages',
        post_url: post_type_url,
      }
    }
  }

  // Handle 404s of the form nonexistent-post-type/x
  else if (path_components.length === 2 && !post_type) {
    return RoutePage404
  }

  return {
    post_type_url,
    post_url,
  }
}
