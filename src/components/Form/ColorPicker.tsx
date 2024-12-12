import { Color } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';

interface ColorPickerProps {
  onChange: (value: Color) => void;
  value?: Color;
}

const colors = [
  { color: Color.Red, className: 'bg-red' },
  { color: Color.Orange, className: 'bg-orange' },
  { color: Color.Yellow, className: 'bg-yellow' },
  { color: Color.Green, className: 'bg-green' },
  { color: Color.Blue, className: 'bg-blue' },
  { color: Color.Indigo, className: 'bg-indigo' },
  { color: Color.Purple, className: 'bg-purple' },
  { color: Color.Pink, className: 'bg-pink' },
  { color: Color.Brown, className: 'bg-brown' },
];

const ColorPicker: FC<ColorPickerProps> = ({ onChange, value }) => {
  return (
    <div className="flex gap-4 h-13">
      {colors.map(({ color, className }) => (
        <button
          key={color}
          type="button"
          className={classNames(
            'rounded-full w-13 h-13 hover:scale-110',
            className,
            { 'border-solid border-white border-2': value === color },
          )}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
