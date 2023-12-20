import type { FC, HTMLAttributes } from 'react'
import { Avatar, Typography } from '@/ui'
import clsx from 'clsx'
import classes from './PublicInfo.module.scss'
import { IListProfileLiks, ListProfileLiks } from '../ListProfileLiks'

export interface IPublicInfo extends HTMLAttributes<HTMLDivElement> {
	fullName: string
	avatar: string
}

export const PublicInfo: FC<IPublicInfo> = ({
	className,
	fullName,
	avatar,
	...props
}) => {
	// Моковые данные
	const links: IListProfileLiks['links'] = [
		{
			link: 'https://web.telegram.org',
			children: 'Telegram',
		},
		{
			link: 'https://github.com',
			children: 'GitHub',
		},
		{
			link: 'https://hh.ru',
			children: 'Резюме',
		},
	]

	const styles = clsx([classes.root, className])
	return (
		<div className={styles} {...props}>
			<Avatar src={avatar} alt='avatar' />

			<div className={classes.wrapper__personalInfo}>
				<Typography size='20px'>{fullName}</Typography>

				<div className={classes.wrapper__profileLinks}>
					<ListProfileLiks links={links} />
				</div>
			</div>
		</div>
	)
}
