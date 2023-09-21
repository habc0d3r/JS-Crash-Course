### What is Sync and Async? (synchronous & asynchronous) ✅

**Sync** means one after another. Until the previous task or command gets completed, the next one doesn't start.

**Async** means starting all tasks or commands at the same time and getting the result from the task that finishes first.

#### How to know that we are writing sync or async code?

```javascript
setTimeout();
setInterval();
Promise;
fetch();
axios;
XMLHttpRequest;
```

If we are using above things in our code, then its asynchronous code, otherwise sync.

### What is async JS? ✅

Many times our final code depends on a server, so we don't know when will we get our response or answer from the server, in such cases we can't write synchronous code. To deal with that we write asynchronous code so that blocking doesn't happen and whenever we get the response, the code get executed in respect to the answer.

eg.:

```javascript
setTimeout(callback, timeinms);
```

Whatever we write inside the callback function it will run after the time mentioned time.

#### Callback function

Callback function are normal functions, just because they are called after a certain period they are called _callback function_.

In async code, callback function always gets executed at a later point in time, often after a certain event or process has completed or after getting the answer.

```javascript
console.log("This line got printed...");
setTimeout(function () {
  console.log("Now after 3 seconds this line also got printed...");
}, 3000);
```


