import { CraftEntryTypeHeadline } from '../../types/craftTypes'

export default function Headline(props: CraftEntryTypeHeadline) {
  const Tag = props.headlineTag.value
  return <Tag>{props.title}</Tag>
}
