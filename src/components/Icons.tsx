import { DeleteIcon, Trash2Icon } from "lucide-react-native";
import { cssInterop } from "nativewind";

cssInterop(DeleteIcon, {
  className: {
    target: "style",
    nativeStyleToProp: { color: true, height: true, width: true },
  },
});

cssInterop(Trash2Icon, {
  className: {
    target: "style",
    nativeStyleToProp: { color: true, height: true, width: true },
  },
});

export { DeleteIcon, Trash2Icon };
