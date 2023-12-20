import type { FC } from 'react'
import { List } from './List'
import { IProfileLink, ProfileLink } from '@/ui'

export interface IListProfileLiks {
	links: IProfileLink[]
}

export const ListProfileLiks: FC<IListProfileLiks> = ({ links }) => {
	return <List arr={links} callback={props => <ProfileLink {...props} />} />
}
