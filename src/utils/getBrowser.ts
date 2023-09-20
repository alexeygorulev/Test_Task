export default function getBrowser() {
  if (navigator.userAgent.search(/Chrome/) > 0) return 'Google Chrome';
  if (navigator.userAgent.search(/CriOS/) > 0) return 'Google Chrome';
  if (navigator.userAgent.search(/Safari/) > 0) return 'Safari';
  if (navigator.userAgent.search(/Firefox/) > 0) return 'Firefox';
  if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) return 'Internet Explorer';
  if (navigator.userAgent.search(/OPR/) > 0) return 'Opera';
  if (navigator.userAgent.search(/Edge/) > 0) return 'Microsoft Edge';
  return null;
}
