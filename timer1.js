const alarms = [];

for (let al of alarms) {
  if(al >= 0 && typeof(al) === 'number' && alarms.length > 0)
  setTimeout(() => {
    process.stdout.write('\x07');
  },
  al * 1000);
}