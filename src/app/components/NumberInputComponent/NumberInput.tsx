import Image from "next/image";
import numberInput from "./numberInput.module.css";

const NumberInput = ({
    label,
    numberInputSymbol,
    decimalValues,
}: {
    label: string;
    numberInputSymbol: any;
    decimalValues: number;
}) => {
    return (
        <div className={numberInput.wrapper}>
            <p className={numberInput.label}>{label}</p>
            <div className={numberInput.numberInputContainer}>
                <Image
                    className={numberInput.image}
                    src={numberInputSymbol}
                    alt="dollar sign"
                />
                <input
                    type="number"
                    className={numberInput.billInput}
                    step={decimalValues}
                />
            </div>
        </div>
    );
};

export { NumberInput };
