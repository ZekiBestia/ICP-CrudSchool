import { useCanister } from "@connect2ic/react"

import { arrayBufferToImgSrc } from "../utils/image"
import React, { useState } from "react"
import edit from "/frontend/assets/edit.svg"
import delet from "/frontend/assets/delete.svg"

const ImageMaxWidth = 2048

const SocialItem = (props) => {
  const { post, refresh } = props
  const [social] = useCanister("social")

  const [loading, setLoading] = useState("")
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState(post[1].message)
  const [visible, setVisible] = useState(false)

  const [update, setUpdate] = useState(false)

  const handleUpdate = async (event) => {
    event.preventDefault()

    setLoading("Loading...")
    try {
      await social.updatePost(post[0], message)
      await refresh()
      setLoading("")
    } catch (e) {
      setLoading("There was an error.")
      console.log(e)
    } finally {
      setVisible(false)
    }
  }

  const handleDelete = async (event) => {
    event.preventDefault()

    setLoading("Loading...")
    try {
      await social.deletePost(post[0])
      await refresh()
      setLoading("")
    } catch (e) {
      setLoading("There was an error.")
      console.log(e)
    } finally {
      setVisible(false)
    }
  }

  return (
    <div className="w-full flex justify-center">
      <table className="w-full border border-collapse border-black text-center text-sm m-auto">
        <thead>
          <tr className="bg-gray-950 text-white">
            {/* Encabezados de la tabla */}
            <th
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              ID
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              AVATAR
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              CLASS
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-500">
            <td
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              {post[1].creator}
            </td>
            <td
              className="border-b border-gray-500 justify-items-center"
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              <img
                className="w-40"
                style={{ margin: "0 auto" }}
                src={arrayBufferToImgSrc(post[1].image)}
                alt="Post Image"
              />
            </td>
            <td
              className="border-b border-gray-500"
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              <p>{post[1].message}</p>
            </td>

            <td
              className={`${
                visible ? `flex` : `hidden`
              } flex-col items-center justify-center space-y-2 border-b border-gray-500`}
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              <input
                className="border border-gray-500 px-2 w-full"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="w-full bg-gray-950 hover:bg-gray-900 text-white p-2 font-bold"
                onClick={handleUpdate}
              >
                Update
              </button>
            </td>
            <td
              className="border-b border-gray-500"
              style={{
                border: "1px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              <p>{loading}</p>
              <div
                className={`${
                  visible ? `hidden` : `flex`
                } items-center justify-center space-x-2`}
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                <button
                  className="bg-white-950 hover:bg-green-500 text-white p-2 font-bold"
                  onClick={() => setVisible(true)}
                >
                 <img src={edit} alt="Edit Icon" className="w-4 h-4 mr-1" />

                </button>
                <button
                  className="bg-white-950 hover:bg-green-900 text-white p-2 font-bold"
                  onClick={handleDelete}
                >
                  <img src={delet} alt="Delete Icon" className="w-4 h-4 mr-1" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export { SocialItem }
