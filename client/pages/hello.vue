<template>
  <main>
    <h1>{{ message }}</h1>
  </main>
</template>

<script lang="ts">
import { GreeterClient } from "~/proto/GreeterServiceClientPb"
import { HeaderRequest, HelloRequest } from "~/proto/greeter_pb"

export default {
  data() {
    return {
      name: "TypeScript",
      message: "",
      headers: []
    }
  },
  async fetch() {
    // const cookie = await app.$cookies.get("AWSELBAuthSessionCookie-1")
    const client = new GreeterClient("https://darmaso.com:8080")
    const request = new HelloRequest()
    // @ts-ignore
    request.setName(this.name.toString())
    await client.sayHello(request, {}, (err, response) => {
      if (err) {
        console.log(err)
        return
      }
      // @ts-ignore
      this.message = response.getMessage()
    })

    // @ts-ignore
    const headerRequest = new HeaderRequest()
    await client.sayHeader(headerRequest, {}, (err, response) => {
      if (err) {
        console.log(err)
        return
      }
      // @ts-ignore
      this.headers = response.toArray()
      // @ts-ignore
      console.log(this.headers)
    })
  }
}
</script>
