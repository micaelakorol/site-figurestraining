import { toast } from "react-toastify";

export const showToast = (message, type) => {
    switch (type) {
      case "warning":
        toast.warning(message);
        break;
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        toast(message);
    }
  };