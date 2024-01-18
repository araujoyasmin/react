type Props = {
    label: string;
    onClick: () => void;
}

export const CustomButton = ({ label, onClick } : Props) => {
    return (
        <button onClick={onClick} className="p-3 bg-blue-700 text-white rounded-md mb-3">{label}</button>
    );
}