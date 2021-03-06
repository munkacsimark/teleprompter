import React, { useEffect } from 'react'
import { useStore, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Row, Container } from 'react-grid-system'

import EditorSidebar from '../EditorSidebar'
import ActionSidebar from '../ActionSidebar'
import Preview from '../Preview'
import styles from './Main.module.scss'
import { setPrompterSlug, getAllUserPrompter, clearPrompterObject } from '../../store/actions/prompter'
import { clearText } from '../../store/actions/text'
import { toggleUpdateBtn } from '../../store/actions/misc'

/**
* @author zilahir
* @function Main
* */

const Main = () => {
	const dispatch = useDispatch()
	const store = useStore()
	useEffect(() => {
		Promise.all([
			dispatch(clearText()),
			dispatch(clearPrompterObject()),
			dispatch(toggleUpdateBtn(false)),
			dispatch(setPrompterSlug(uuidv4().split('-')[0])), // TODO: put this back on
			dispatch(setPrompterSlug('f78da620')),
		]).then(() => {
			if (store.getState().user.loggedIn) {
				dispatch(getAllUserPrompter('5e63f4ba19a0555a4fbbe5da')) // TODO: change hardcoded user id fro user object
			}
		})
	}, [])
	return (
		<div className={styles.mainContainer}>
			<Container
				fluid
			>
				<Row>
					<EditorSidebar />
					<Preview />
					<ActionSidebar />
				</Row>
			</Container>
		</div>
	)
}

export default Main
