import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserName } from '../../features/user/userSlice'
import './EditUserForm.css'

function EditUserForm({ onClose }) {
  const { firstName, lastName, userName, updateStatus, updateError } = useSelector(
    (state) => state.user,
  )
  const [newUserName, setNewUserName] = useState(userName ?? '')
  const dispatch = useDispatch()
  const userNameInputRef = useRef(null)

  // Le bouton « Edit Name » qui avait le focus vient d'être démonté : sans
  // cette remise au point, le focus retomberait sur <body>.
  useEffect(() => {
    userNameInputRef.current?.focus()
  }, [])

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
            ref={userNameInputRef}
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

        {updateError && (
          <p className="edit-user__error" role="alert">
            {updateError}
          </p>
        )}

        <div className="edit-user__actions">
          <button
            type="submit"
            className="edit-user__button"
            disabled={updateStatus === 'loading'}
          >
            {updateStatus === 'loading' ? 'Saving…' : 'Save'}
          </button>
          <button type="button" className="edit-user__button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditUserForm