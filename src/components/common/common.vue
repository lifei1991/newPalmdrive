
<script>
let isMobile = false
if (/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {
  isMobile = true
} else {
  isMobile = false
}
export default {
  isMobile
}
</script>
