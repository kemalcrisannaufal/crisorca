import AdminLayout from "@/components/layouts/Admin";
import Button from "@/components/ui/Button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import { User } from "@/types/user.type";

type Proptypes = {
  users: User[];
  setToaster: Dispatch<SetStateAction<object>>;
};

const UsersAdminViews = (props: Proptypes) => {
  const { users, setToaster } = props;
  const [updatedUser, setUpdatedUser] = useState<User | object>({});
  const [deletedUser, setDeletedUser] = useState<User | object>({});
  const [usersData, setUsersData] = useState<User[]>([]);

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  return (
    <>
      <AdminLayout>
        <h1 className="text-3xl text-neutral-800 font-semibold">
          Users Management
        </h1>
        <div className="mt-5 overflow-x-auto border border-gray-300 rounded-lg p-1">
          <table className="w-full min-w-max border-collapse bg-white">
            <thead>
              <tr className="border-b border-gray-300 text-gray-900 font-semibold text-sm text-neutral-700">
                <th className="px-4 py-2 text-left">No</th>
                <th className="px-4 py-2 text-left">Fullname</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user: User, index: number) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-gray-200 hover:bg-gray-100 transition text-neutral-700"
                >
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2">{user.fullname}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.phone}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 flex justify-center items-center gap-2">
                    <Button
                      type="button"
                      onClick={() => setUpdatedUser(user)}
                      classname="bg-yellow-500 hover:bg-yellow-600"
                    >
                      <i className="bx bxs-edit text-lg"></i>
                    </Button>

                    <Button
                      type="button"
                      classname="bg-red-500 hover:bg-red-800"
                      onClick={() => setDeletedUser(user)}
                    >
                      <i className="bx bxs-trash text-lg"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>

      {Object.keys(updatedUser).length > 0 && (
        <ModalUpdateUser
          updatedUser={updatedUser}
          setUpdatedUser={setUpdatedUser}
          setUsersData={setUsersData}
          setToaster={setToaster}
        />
      )}

      {Object.keys(deletedUser).length > 0 && (
        <ModalDeleteUser
          deletedUser={deletedUser}
          setDeletedUser={setDeletedUser}
          setUsersData={setUsersData}
          setToaster={setToaster}
        />
      )}
    </>
  );
};

export default UsersAdminViews;
