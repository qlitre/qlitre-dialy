import { MicroCMSImage } from 'microcms-js-sdk'

export type Tag = {
  id: string
  name: string
}

export type Post = {
  id: string
  title: string
  publishedAt: string
  tag: Array<Tag>
  text: string
}

export type About={
  title:string
  image:MicroCMSImage
  body:string
}