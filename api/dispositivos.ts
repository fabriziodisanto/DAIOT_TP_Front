import useSWR from "swr"

const EP = "/devices"

//obtener todos los dispositivos
export const useDispositivoList = () => {
    const { data, mutate: mutateDispositivos } = useSWR(EP);
    const dispositivos = data?.data;
    return { dispositivos, mutateDispositivos }
}

//obtener un dispositivo unico.
export const useDispositivoById = (id: any) => {
    const { data, mutate: mutateDispositivo } = useSWR(`logs/${id}`);
    const dispositivo = data?.data;
    return { dispositivo, mutateDispositivo }
}