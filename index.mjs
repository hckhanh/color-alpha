/**
 * @module  color-alpha
 */
import parse from 'color-parse';

export default function alpha (color, value) {
	var obj = parse(color);

	if (value == null) value = obj.alpha;

	//catch percent
	if (obj.space?.[0] === 'h') {
		return obj.space + ['a(', obj.values[0], ',', obj.values[1], '%,', obj.values[2], '%,', value, ')'].join('');
	}

	return obj.space + ['a(', obj.values, ',', value, ')'].join('');
}
