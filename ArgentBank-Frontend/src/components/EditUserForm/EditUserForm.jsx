import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserName } from '../../features/user/userSlice'
import './EditUserForm.css'

function EditUserForm({ onClose }) {
  const { firstName, lastName, userName } = useSelector((state) => state.user)
  const [newUserName, setNewUserName] = useState(userName)
  const dispatch = useDispatch()

  async function handleSubmit(event) {
    event.preventDefault()
    const result = await dispatch(updateUserName(newUserName))
    if (updateUserName.fulfilled.match(result)) {
      onClose()
    }
  }

  return (
    <div className="edit-user">
      <h2 className="edit-user__title">Edit user info</h2>
      <form onSubmit={handleSubmit}>
        <div className="edit-user__field">
          <label className="edit-user__label" htmlFor="userName">User name:</label>
          <input
            className="edit-user__input"
            type="text"
            id="userName"
            value={newUserName}
            onChange={(event) => setNewUserName(event.target.value)}
            required
          />
        </div>
        <div className="edit-user__field">
          <label className="edit-user__label" htmlFor="firstName">First name:</label>
          <input
            className="edit-user__input"
            type="text"
            id="firstName"
            value={firstName ?? ''}
            disabled
          />
        </div>
        <div className="edit-user__field">
          <label className="edit-user__label" htmlFor="lastName">Last name:</label>
          <input
            className="edit-user__input"
            type="text"
            id="lastName"
            value={lastName ?? ''}
            disabled
          />
        </div>
        <div className="edit-user__actions">
          <button type="submit" className="edit-user__button">Save</button>
          <button type="button" className="edit-user__button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditUserForm