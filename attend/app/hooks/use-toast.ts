"use client";

import * as React from "react";
import type { ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
const listeners: Array<(state: ToasterToast[]) => void> = [];

let memoryState: ToasterToast[] = [];

function dispatch(action: any) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

function reducer(state: ToasterToast[], action: any) {
  switch (action.type) {
    case "ADD_TOAST":
      return [...state, action.toast].slice(-TOAST_LIMIT);

    case "REMOVE_TOAST":
      return state.filter((t) => t.id !== action.toastId);

    default:
      return state;
  }
}

function toast(props: Omit<ToasterToast, "id">) {
  const id = genId();

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
    },
  });

  const timeout = setTimeout(() => {
    dispatch({
      type: "REMOVE_TOAST",
      toastId: id,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(id, timeout);
}

function useToast() {
  const [state, setState] = React.useState<ToasterToast[]>([]);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    toast,
    toasts: state,
  };
}

export { useToast, toast };
